import { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { NASA_API_KEY } from '@env';
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { FontAwesome } from '@expo/vector-icons';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { LoadingSpinner } from '../../../../assets/loading-spinner';
import { Text } from '../../../components/typography/text.component';
import { ApodInfoCard } from '../components/apod-card.component';

export const ApodScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(null);
  const [image, setImage] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    const currentDate = new Date();
    const previousDay = new Date(currentDate);
    previousDay.setDate(currentDate.getDate() - 1);

    const formattedDate = previousDay.toISOString().slice(0, 10);
    setDate(formattedDate);
    fetchApod();
  }, [date]);

  const fetchApod = async () => {
    // setIsLoading(true);
    await axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`
      )
      .then((res) => {
        setIsLoading(false);
        setImage(res.data.url);
        setExplanation(res.data.explanation);
        setTitle(res.data.title);
      });
  };

  const handleCalendar = () => {
    setOpen(!open);
  };

  const handleDateChange = (d) => {
    const [year, month, day] = d.split('/');
    const originalDate = new Date(year, month - 1, day);
    const previousDay = new Date(originalDate);
    previousDay.setDate(originalDate.getDate() - 1);
    setDate(previousDay.toISOString().slice(0, 10));
    setOpen(!open);
  };

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TouchableOpacity onPress={handleCalendar}>
            <FontAwesome name='calendar' size={24} color='black' />
          </TouchableOpacity>
          <Modal animationType='slide' transparent={true} visible={open}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <DatePicker
                  mode='calendar'
                  selected={date}
                  onDateChange={handleDateChange}
                  minimumDate='1995-06-17'
                  maximumDate={getToday()}
                />
                <TouchableOpacity onPress={handleCalendar}>
                  <Text>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <ApodInfoCard image={image} title={title} explanation={explanation} />
        </>
      )}
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
