import { combineReducers } from 'redux';
import BandsReducer from './reducer_bands';
// import BucketListReducer from './reducer_bucketlist';
import SelectedBand from './reducer_selectedband'

//Define the properties of our App State here

	const rootReducer = combineReducers({
		bands: BandsReducer,
		SelectedBand: SelectedBand
	});

	export default rootReducer;