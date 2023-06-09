import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useNavigate } from 'react-router';
import { Grid } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import messages from './Report.messages';
import TableCard from '../../components/TableCard/TableCard';
import { useGetTopUsedSentencesQuery } from '../reports/reportApi';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../user/userSlice';
import './Report.css';

export default function Report() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/settings');
  };
  const user = useSelector(selectUser);

  const [days, setDays] = useState(10);
  const [topUsedSentences, setTopUsedSentences] = useState([]);

  const { data, refetch, error, isLoading } = useGetTopUsedSentencesQuery({
    userId: user.id,
    days: days,
    action: 'Start Speech',
  });

  const handleDaysChange = (event) => {
    setDays(event.target.value);
  };

  useEffect(() => {
    refetch();
  }, [days, refetch]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (!data) return;
    setTopUsedSentences(data.topUsedSentences);
  }, [data]);

  return (
    <FullScreenDialog
      fullWidth={true}
      title="Report"
      open={true}
      onClose={handleGoBack}
      enableSave={false}
    >
      <Fragment>
        <div className="Report__Graph">
          <Grid container direction="row" className="Report__Graph__Select">
            <Grid item className="Report__Graph__Select__Item">
              <FormControl variant="outlined">
                <Select
                  labelId="range-select-label"
                  id="range-select"
                  autoWidth={false}
                  onChange={handleDaysChange}
                  value={days}
                >
                  <MenuItem value={10}>
                    <FormattedMessage {...messages.tenDaysUsage} />
                  </MenuItem>
                  <MenuItem value={20}>
                    <FormattedMessage {...messages.twentyDaysUsage} />
                  </MenuItem>
                  <MenuItem value={30}>
                    <FormattedMessage {...messages.thirtyDaysUsage} />
                  </MenuItem>
                  <MenuItem value={60}>
                    <FormattedMessage {...messages.sixtyDaysUsage} />
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item className="Report__Graph__Select__Item">
              {/* {isFetching && <CircularProgress size={30} thickness={4} />} */}
            </Grid>
          </Grid>
        </div>
        {/* <ModifiedAreaChart
            height="200px"
            option={{
              series: [
                {
                  data: usage.data,
                  type: 'line',
                },
              ],
              xAxis: {
                data: this.getDates(days),
              },
              yAxis: {
                max: usage.max,
                min: usage.min,
                offset: -13,
              },
            }}
          /> */}
        <div className="Report__Metrics">
          <Grid
            container
            spacing={3}
            // alignItems="center"
            // justify="center"
            // direction="column"
          >
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <TableCard
                data={
                  topUsedSentences.length
                    ? topUsedSentences
                    : [{ sentence: 'No data', count: 0 }]
                }
                tableHead={['lol']}
                title={'Top five most used sentences'}
              />
            </Grid>
          </Grid>
        </div>
      </Fragment>
    </FullScreenDialog>
  );
}
