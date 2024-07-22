import { combineReducers } from 'redux';
import LoaderReducer from './reducer/mainreducer';
import Api from './reducer/api';
import Auth from './reducer/auth/login';
import ShowModal from './reducer/showmodal';
import Uploadimage from './reducer/image/image';
import Showclasses from './reducer/classs/showclass';
import Subject from './reducer/subject/subject';
import Themereducer from './reducer/theme/theme';


export const rootreducer = combineReducers({
    Loader: LoaderReducer,
    Api : Api,
    Auth: Auth,
    Modal:ShowModal,
    Uploadimage: Uploadimage,
    Showclasses: Showclasses,
    Subject: Subject,
    theme: Themereducer,
  });
  