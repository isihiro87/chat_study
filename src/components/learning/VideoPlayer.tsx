import type { Video } from '../../data/types';

interface VideoPlayerProps {
  videos: Video[];
}

export function VideoPlayer({ videos }: VideoPlayerProps) {
  if (videos.length === 0) {
    return (
      <div className="flex h-64 items-center justify-center rounded-xl bg-white">
        <p className="text-gray-500">動画がありません</p>
      </div>
    );
  }

  return (
    <div className="space-y-4 pb-20">
      {videos.map((video) => (
        <div key={video.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
          <div className="relative aspect-video w-full">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.videoId}`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <div className="p-3">
            <h3 className="font-semibold text-gray-800">{video.title}</h3>
            <p className="mt-1 text-sm text-gray-500">{video.description}</p>
            {video.duration && (
              <p className="mt-1 text-xs text-gray-400">{video.duration}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
