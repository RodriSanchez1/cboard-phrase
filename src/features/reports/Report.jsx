import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useNavigate } from 'react-router';
import { Grid, Button } from '@mui/material';

import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import messages from './Report.messages';
// import CircularProgress from '@mui/material';
// import theme from '../../theme';
// import ModifiedAreaChart from '../../components/ModifiedAreaChart/ModifiedAreaChart';
// import StatCards from '../../components/StatCards/StatCards';
// import TableCard from '../../components/TableCard/TableCard';
// import DoughnutChart from '../../components/DoughnutChart/DoughnutChart';
// import StatCards2 from '../../components/StatCards2/StatCards2';
// import Barchart from '../../components/Barchart/Barchart';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Report() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <FullScreenDialog
      fullWidth={true}
      title="Report"
      open={true}
      onClose={handleGoBack}
      enableSave={false}
    >
      <Fragment>
        {/* <div className="Report__Graph">
          <Grid container direction="row" className="Report__Graph__Select">
            <Grid item className="Report__Graph__Select__Item">
              <FormControl variant="outlined">
                <Select
                  labelId="range-select-label"
                  id="range-select"
                  autoWidth={false}
                  onChange={this.handleDaysChange}
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
              {isFetching && <CircularProgress size={30} thickness={4} />}
            </Grid>
          </Grid>
          <ModifiedAreaChart
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
          />
        </div>
        <div className="Report__Metrics">
          <Grid container spacing={3}>
            <Grid item lg={8} md={8} sm={12} xs={12}>
              <StatCards
                onDetailsClick={this.handleDetailsDialogOpen.bind(this)}
                data={totals}
              />
              <TableCard
                data={topUsed.symbols}
                tableHead={tablesHead}
                title={intl.formatMessage(messages.topUsedButtons)}
              />
            </Grid>
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <DoughnutChart
                data={symbolSources}
                title={intl.formatMessage(messages.symbolSources)}
                height="300px"
                color={[
                  theme.palette.primary.dark,
                  theme.palette.primary.main,
                  theme.palette.primary.light,
                ]}
              />
              <StatCards2 categoryTotals={categoryTotals} />
              <Barchart
                data={topUsed.boards}
                title={intl.formatMessage(messages.mostUsedBoards)}
              />
            </Grid>
          </Grid>
        </div> */}
        {/* <Dialog
          onClose={this.handleDialogClose.bind(this)}
          aria-labelledby="details-dialog"
          open={this.state.openDetailsDialog}
          TransitionComponent={Transition}
          aria-describedby="details-desc"
        >
          <DialogContent className={classes.root}>
            <DialogContentText id="details-dialog-desc"></DialogContentText>
            <StyledTable
              data={this.state.detailsData}
              tableHead={tablesHead}
              isDense={true}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleDialogClose.bind(this)} color="primary">
              <FormattedMessage {...messages.close} />
            </Button>
          </DialogActions>
        </Dialog> */}
      </Fragment>
    </FullScreenDialog>
  );
}
