import json
from googleapiclient.discovery import build
from youtube_transcript_api import YouTubeTranscriptApi
from dotenv import load_dotenv
import os

from parse_takeout import get_video_ids

load_dotenv()

# Replace with your own API key
api_key = os.getenv('YOUTUBE_API_KEY')

# Create a YouTube API client
youtube = build('youtube', 'v3', developerKey=api_key)

def get_video_data(video_ids):
    # Fetch video details for multiple videos
    request = youtube.videos().list(
        part='snippet,contentDetails,statistics',
        id=','.join(video_ids)
    )
    response = request.execute()

    video_data_list = []

    for video_details in response['items']:
        title = video_details['snippet']['title']
        description = video_details['snippet']['description']
        channel_title = video_details['snippet']['channelTitle']
        published_date = video_details['snippet']['publishedAt']

        view_count = video_details['statistics'].get('viewCount', None)
        like_count = video_details['statistics'].get('likeCount', None)
        comment_count = video_details['statistics'].get('commentCount', None)
        tags = video_details['snippet'].get('tags', [])
        duration = video_details['contentDetails']['duration']

        # # Fetch the transcript
        # try:
        #     transcript = YouTubeTranscriptApi.get_transcript(video_details['id'])
        # except Exception as e:
        #     transcript = f"Transcript not available: {e}"

        # Create a dictionary to hold the video details and transcript
        video_data = {
            'title': title,
            'description': description,
            'channel_title': channel_title,
            'published_date': published_date,
            'view_count': view_count,
            'like_count': like_count,
            'comment_count': comment_count,
            'tags': tags,
            'duration': duration
            # 'transcript': transcript
        }

        video_data_list.append(video_data)

    # Return the video data list
    return video_data_list

name = 'sofia'

folder_path = f'user_data/{name}/'

video_ids = get_video_ids(folder_path + 'watch-history.html')

all_video_data = []

for i in range(0, min(1000, len(video_ids)), 50):
    print(i)
    all_video_data.extend(get_video_data(video_ids[i:i+50]))

# Save the data to a JSON file
with open(folder_path + 'video_data.json', 'w') as json_file:
    json.dump(all_video_data, json_file, indent=4)