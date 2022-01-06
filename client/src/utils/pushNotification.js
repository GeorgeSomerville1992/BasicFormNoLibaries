import { notification } from 'antd';

const pushNotification = (type, description) => {
  notification[type]({
    message: type,
    description
  });
};

export default pushNotification 