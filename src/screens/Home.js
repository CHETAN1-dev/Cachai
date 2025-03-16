import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Header from '../components/molecules/Header';
import BusinessInfo from '../components/organisms/BusinessInfo';
import OrderingOptions from '../components/organisms/OderingOption';
import Discount from '../components/molecules/Discount';
import Review from '../components/molecules/Review';
import BusinessInfoContainer from '../components/organisms/Buisnessinfocontainer';
import BusinessStats from '../components/molecules/BusinessStats';
export default function Home() {
  return (
    <ScrollView>
      <View>
        <Header />
        <BusinessInfo />
        <BusinessStats />
        <OrderingOptions />
        <Discount />
        <Review />
        <BusinessInfoContainer />
      </View>
    </ScrollView>
  );
}
