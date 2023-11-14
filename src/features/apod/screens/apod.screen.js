import { useState, useEffect } from 'react';
import { Modal, TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { NASA_API_KEY } from '@env';
import DatePicker, { getToday } from 'react-native-modern-datepicker';
import { FontAwesome } from '@expo/vector-icons';
import { SafeArea } from '../../../components/utils/safe-area.component';
import { LoadingSpinner } from '../../../../assets/loading-spinner';
import { useRef } from 'react';
import { ApodInfoCard } from '../components/apod-card.component';
import {
  ModalWrapper,
  ModalView,
  Option,
  OptionText,
} from '../styles/apod-modal.styles';
import { IconsWrapper } from '../styles/apod.styles';
import Calendar from '../../../../assets/calendar.svg';
import Rover from '../../../../assets/rover.svg';

export const ApodScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(getToday());
  const [image, setImage] = useState('');
  const [explanation, setExplanation] = useState('');
  const [title, setTitle] = useState('');

  const isFirstRun = useRef(true);

  useEffect(() => {
    fetchApod();
  }, []);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    } else {
      fetchApodByDate();
    }
  }, [date]);

  const fetchApod = async () => {
    setIsLoading(true);
    await axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`)
      .then((res) => {
        setIsLoading(false);
        setImage(res.data.url);
        setExplanation(res.data.explanation);
        setTitle(res.data.title);
      });
  };

  const fetchApodByDate = async () => {
    setIsLoading(true);
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
    const selectedDate = d.replace(/\//g, '-');
    setDate(selectedDate);
    setOpen(!open);
  };

  return (
    <SafeArea>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <IconsWrapper>
            <TouchableOpacity onPress={handleCalendar}>
              <Calendar width={24} height={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCalendar}>
              <Rover width={24} height={24} />
            </TouchableOpacity>
          </IconsWrapper>
          <Modal animationType='slide' transparent={true} visible={open}>
            <ModalWrapper>
              <ModalView>
                <DatePicker
                  mode='calendar'
                  selected={date}
                  onDateChange={handleDateChange}
                  minimumDate='1995-06-17'
                  maximumDate={getToday()}
                />
                <Option onPress={handleCalendar}>
                  <OptionText>Close</OptionText>
                </Option>
              </ModalView>
            </ModalWrapper>
          </Modal>
          <ApodInfoCard image={image} title={title} explanation={explanation} />
        </>
      )}
    </SafeArea>
  );
};
