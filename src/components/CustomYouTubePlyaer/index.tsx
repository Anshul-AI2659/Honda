import React, { useState, useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { vh, vw } from '../../styles';

// Types
interface CustomYouTubePlayerProps {
  videoId: string;
  autoPlay?: boolean;
}

export const CustomYouTubePlayer: React.FC<CustomYouTubePlayerProps> = ({
  videoId,
  autoPlay = false,
}) => {
  const [isBuffering, setIsBuffering] = useState(true);

  const handleStateChange = useCallback((state: string) => {
    if (state === 'playing') {
      setIsBuffering(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      {isBuffering && (
        <ActivityIndicator size="large" color="red" style={styles.loader} />
      )}
      <YoutubePlayer
        height={vw(400)}
        width={vw(400)}
        play={autoPlay}
        videoId={videoId}
        onChangeState={handleStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loader: {
    position: 'absolute',
    zIndex: 1,
  },
});

