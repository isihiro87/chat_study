import { z } from 'zod';

const DifficultySchema = z.enum(['basic', 'standard', 'advanced']);

const FlashcardSchema = z.object({
  id: z.string().min(1),
  front: z.string().min(1),
  back: z.string().min(1),
  hint: z.string().optional(),
  explanation: z.string().optional(),
  difficulty: DifficultySchema.optional(),
});

const QuizQuestionSchema = z
  .object({
    id: z.string().min(1),
    question: z.string().min(1),
    type: z.enum(['choice', 'reorder']).optional(),
    options: z.array(z.string()),
    correctIndex: z.number().int(),
    words: z.array(z.string()).optional(),
    correctOrder: z.array(z.number().int()).optional(),
    punctuation: z.enum(['.', '?']).optional(),
    explanation: z.string().optional(),
    difficulty: DifficultySchema.optional(),
  })
  .superRefine((q, ctx) => {
    const isReorder = q.type === 'reorder';
    if (isReorder) {
      if (!q.words || q.words.length === 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'reorder question requires non-empty words[]',
          path: ['words'],
        });
      }
      if (!q.correctOrder || q.correctOrder.length === 0) {
        ctx.addIssue({
          code: 'custom',
          message: 'reorder question requires non-empty correctOrder[]',
          path: ['correctOrder'],
        });
      }
    } else {
      if (q.options.length < 2) {
        ctx.addIssue({
          code: 'custom',
          message: 'choice question requires at least 2 options',
          path: ['options'],
        });
      }
      if (q.correctIndex < 0 || q.correctIndex >= q.options.length) {
        ctx.addIssue({
          code: 'custom',
          message: `correctIndex ${q.correctIndex} out of range [0, ${q.options.length})`,
          path: ['correctIndex'],
        });
      }
    }
  });

const ExplanationSectionSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z
    .object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional(),
    })
    .optional(),
  keyPoints: z.array(z.string()).optional(),
});

const ExplanationSchema = z.object({
  sections: z.array(ExplanationSectionSchema),
  slides: z.unknown().optional(),
});

const ExampleStepSchema = z.object({
  title: z.string(),
  content: z.string(),
  highlight: z.string().optional(),
});

const ExampleSchema = z.object({
  id: z.string().min(1),
  question: z.string(),
  steps: z.array(ExampleStepSchema),
  answer: z.string(),
});

const ExampleSetSchema = z.object({
  examples: z.array(ExampleSchema),
});

const VideoSchema = z.object({
  id: z.string().min(1),
  title: z.string(),
  description: z.string(),
  type: z.enum(['horizontal', 'vertical']),
  source: z.enum(['youtube', 'external']),
  videoId: z.string(),
  duration: z.string().optional(),
  thumbnail: z.string().optional(),
});

export const TopicContentSchema = z
  .object({
    subjectId: z.string().min(1),
    eraId: z.string().min(1),
    topicId: z.string().min(1),
    name: z.string().min(1),
    subtitle: z.string().default(''),
    icon: z.string().default(''),
    order: z.number().int().nonnegative(),
    chatId: z.string().optional(),
    explanation: ExplanationSchema.optional(),
    videos: z.array(VideoSchema).default([]),
    flashcards: z.array(FlashcardSchema).default([]),
    quiz: z
      .object({
        questions: z.array(QuizQuestionSchema),
      })
      .default({ questions: [] }),
    examples: ExampleSetSchema.optional(),
  })
  .superRefine((t, ctx) => {
    const fcIds = new Set<string>();
    t.flashcards.forEach((fc, i) => {
      if (fcIds.has(fc.id)) {
        ctx.addIssue({
          code: 'custom',
          message: `duplicate flashcard id: ${fc.id}`,
          path: ['flashcards', i, 'id'],
        });
      }
      fcIds.add(fc.id);
    });
    const qIds = new Set<string>();
    t.quiz.questions.forEach((q, i) => {
      if (qIds.has(q.id)) {
        ctx.addIssue({
          code: 'custom',
          message: `duplicate quiz question id: ${q.id}`,
          path: ['quiz', 'questions', i, 'id'],
        });
      }
      qIds.add(q.id);
    });
  });

export type TopicContentJson = z.infer<typeof TopicContentSchema>;

export function buildFirestoreDocId(t: {
  subjectId: string;
  eraId: string;
  topicId: string;
}): string {
  return `${t.subjectId}__${t.eraId}__${t.topicId}`;
}
