import Header from './Header';
 
export default {
  title: 'Components/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    headerConfig: {
      headerText: 'How can we help?'
    }
  },
};
 
export const Default = {
  args: {
    headerConfig: {},
  },
};

export const CustomText = {
  args: {
    headerConfig: {
      headerText: '¿Cómo puedo ayudarles?'
    }
  },
};

export const WithBanner = {
  args: {
    logoConfig: {
      sourceUrl: 'https://mikeliao-cpp-test.s3.us-west-2.amazonaws.com/image-removebg-preview(1).png'
    }
  },
};
