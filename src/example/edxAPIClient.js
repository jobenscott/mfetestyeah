import axios from 'axios';

const edxApiClient = axios.create({
  baseURL: 'https://base.manager.st.phoenix.edu/api/course_aggregation_api/courses',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default edxApiClient;
