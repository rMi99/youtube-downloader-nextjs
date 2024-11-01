import ytdl from 'ytdl-core';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');

  if (!url) {
    return new Response(JSON.stringify({ error: 'No URL provided' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const videoInfo = await ytdl.getInfo(url);
    // Sanitize the video title to ensure it's safe for filenames
    const videoTitle = (videoInfo.videoDetails.title || 'downloaded_video').replace(/[\/\\:*?"<>|]/g, '_');

    const stream = ytdl(url, { quality: 'highestvideo' });

    // Return the stream in the response
    return new Response(stream, {
      headers: {
        'Content-Disposition': `attachment; filename="${videoTitle}.mp4"`,
        'Content-Type': 'video/mp4',
      },
    });
  } catch (error) {
    console.error('Error downloading video:', error);
    return new Response(JSON.stringify({ error: 'Failed to download video' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
