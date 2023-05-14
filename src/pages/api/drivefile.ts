import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

export type DriveFile = {
    kind: string;
    id: string;
    name: string;
    mimeType: 'image/jpeg';
};

export type Data = {
    files: DriveFile[];
};

const CLIENT_ID = '281111478663-l9s14hml4eal2ugkaf99omne0qmt70bm.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Data>) {
    const oauth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    oauth2Client.setCredentials({
        refresh_token: '1//04ioLCEm9y5ROCgYIARAAGAQSNwF-L9IrK_UV7KfzW3A46v5CqI4aFZFVTT1w-FIKt820pfKiiMz15u8T8HYLWqqmfbr6xHxSQow'
    });

    const drive = google.drive({
        version: 'v3',
        auth: oauth2Client,
        params: {
            q: `mimeType = 'image/jpeg'`
        }
    });

    const response = await drive.files.list();

    res.status(200).json({ files: response.data.files as DriveFile[] });
}
