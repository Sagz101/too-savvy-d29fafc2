
import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Upload, FileVideo, CheckCircle, AlertTriangle } from 'lucide-react';
import { toast } from 'sonner';
import { uploadToIPFS, getIPFSUrl } from '@/services/ipfs';

interface VideoMetadata {
  name: string;
  description: string;
}

export const EnhancedVideoUploader: React.FC = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoMetadata, setVideoMetadata] = useState<VideoMetadata>({
    name: '',
    description: '',
  });
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [ipfsHash, setIpfsHash] = useState<string | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    setVideoFile(file);
    setUploadError(null); // Clear any previous errors
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'video/*': ['.mp4', '.mov', '.avi', '.mkv', '.webm']
    },
    maxFiles: 1,
  });

  const handleMetadataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setVideoMetadata(prev => ({ ...prev, [name]: value }));
  };

  const handleUpload = async () => {
    if (!videoFile) {
      setUploadError('Please select a video file');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);
    setIpfsHash(null);
    setUploadError(null);

    try {
      toast.loading('Uploading video to IPFS...');
      const hash = await uploadToIPFS(videoFile);
      setIpfsHash(hash);
      toast.success('Video uploaded to IPFS!', {
        description: `IPFS Hash: ${hash.slice(0, 10)}...`,
      });
    } catch (error: any) {
      console.error('IPFS upload error:', error);
      setUploadError(error.message || 'Failed to upload video to IPFS');
      toast.error('Failed to upload video', {
        description: error.message || 'Please try again.',
      });
    } finally {
      setIsUploading(false);
    }
  };

  const ipfsUrl = ipfsHash ? getIPFSUrl(ipfsHash) : null;

  return (
    <div className="space-y-6">
      <Card className="bg-neura-dark/50 border-neura-purple/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileVideo className="w-5 h-5 text-neura-cyan" />
            Video Upload
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer ${
              isDragActive ? 'border-neura-cyan' : 'border-neura-purple/30 hover:border-neura-purple/50'
            } transition-colors`}
          >
            <input {...getInputProps()} />
            <Upload className="w-8 h-8 text-neura-purple/50 mx-auto mb-2" />
            <p className="text-white font-medium mb-1">
              {videoFile ? videoFile.name : 'Drag & Drop Video or Click to Upload'}
            </p>
            <p className="text-white/50 text-sm">MP4, MOV, AVI, MKV, WebM (Max 200MB)</p>
            {uploadError && (
              <div className="mt-2 text-red-500 text-sm flex items-center justify-center gap-1">
                <AlertTriangle className="w-4 h-4" />
                {uploadError}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="videoName">Video Name</Label>
              <Input
                type="text"
                id="videoName"
                name="name"
                placeholder="Enter video name"
                value={videoMetadata.name}
                onChange={handleMetadataChange}
                className="bg-neura-dark/50 border-neura-purple/30 text-white"
              />
            </div>
            <div>
              <Label htmlFor="videoDescription">Description</Label>
              <Input
                type="text"
                id="videoDescription"
                name="description"
                placeholder="Enter video description"
                value={videoMetadata.description}
                onChange={handleMetadataChange}
                className="bg-neura-dark/50 border-neura-purple/30 text-white"
              />
            </div>
          </div>

          {uploadProgress > 0 && (
            <Progress value={uploadProgress} className="bg-neura-dark/50 border-neura-purple/30" />
          )}

          {ipfsHash && (
            <div className="flex items-center gap-2 text-green-500">
              <CheckCircle className="w-5 h-5" />
              <span>Video uploaded successfully!</span>
            </div>
          )}

          <Button
            onClick={handleUpload}
            disabled={isUploading || !videoFile}
            className="bg-gradient-to-r from-neura-purple to-neura-cyan text-white hover:opacity-90"
          >
            {isUploading ? (
              <>
                <Upload className="w-4 h-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Upload className="w-4 h-4 mr-2" />
                Upload to IPFS
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {ipfsUrl && (
        <Card className="bg-neura-dark/50 border-neura-purple/30">
          <CardHeader>
            <CardTitle>IPFS Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="text-sm">
              <span className="text-white/70">IPFS Hash:</span>
              <span className="text-white font-mono">{ipfsHash}</span>
            </div>
            <div className="text-sm">
              <span className="text-white/70">Video URL:</span>
              <a
                href={ipfsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neura-cyan hover:underline"
              >
                {ipfsUrl}
              </a>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
