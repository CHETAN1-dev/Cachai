import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BusinessBanner from '../molecules/BusinessBanner';
import IconButton from '../atoms/IconButton';
import LikeIcon from '../../assets/icons/BuisnessInfoIcon/Like';
import UnlikeIcon from '../../assets/icons/BuisnessInfoIcon/UnlikeIcon';

const BusinessInfo = ({
  businessName = 'Cachai Po!',
  description = 'We specialize in authentic and traditional Chilean food. Experience fresh Chilean bread and BBQ.',
  bannerImage,
}) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <BusinessBanner imageSource={bannerImage} />
      <View style={styles.detailsWrapper}>
        <Text style={styles.businessName}>{businessName}</Text>

        <IconButton
          Icon={liked ? LikeIcon : UnlikeIcon}
          size={42}
          onPress={toggleLike}
          style={styles.likeButton}
        />

        <Text style={styles.businessDescription}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  detailsWrapper: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  businessName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  businessDescription: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    fontFamily: 'BeVietnamPro-Bold.ttf',
    marginBottom: 16,
  },
  likeButton: {
    position: 'absolute',
    bottom: 60,
    right: 10,
    zIndex: 10,
  },
});

export default BusinessInfo;
