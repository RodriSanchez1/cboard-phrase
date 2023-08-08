import FullScreenDialog from '../../components/FullScreenDialog/FullScreenDialog';
import { useNavigate } from 'react-router-dom';
import { Paper } from '@mui/material';
import { Typography } from '@mui/material';

export default function Help() {
  const navigate = useNavigate();

  const onClose = () => {
    navigate('/settings');
  };

  return (
    <FullScreenDialog title="User Help" open={true} onClose={onClose}>
      <Paper elevation={3} sx={{ mt: 1 }}>
        <div style={{ padding: '10px 50px' }}>
          <Typography variant="h4" component="h2" mt={1} mb={3} align="center">
            User Help
          </Typography>
          <Typography variant="h5" component="h5" mt={1}>
            What is Cboard Phrase?
          </Typography>
          <Typography variant="body1" component="p" mt={1} align="justify">
            Cboard Phrase is a Alternative and Augmentative Communication (AAC)
            web application that allows you to communicate using a board with
            phrases in a simple and intuitive way. It is intended for people who
            lose the ability to speak or have some kind of speech problem.
          </Typography>
          <Typography variant="h5" component="h5" mt={1}>
            Sign up and Login
          </Typography>
          <Typography variant="body1" component="p" mt={1} align="justify">
            You can use the application without registering, but if you want to
            save your phrases and use them on any device, you must register.
            <br /> Go to the Settings page and click on the User option. There
            you can register or login.
          </Typography>
          <Typography variant="h6" component="h6" mt={1}>
            Sign up
          </Typography>
          <Typography variant="body1" component="p" mt={1} align="justify">
            To register, you must enter a name, email and password. Also you
            need to accept the terms and conditions of use. Once registered,you
            will be redirected to the login tab.
          </Typography>
          <Typography variant="h6" component="h6" mt={1}>
            Login
          </Typography>
          <Typography variant="body1" component="p" mt={1} align="justify">
            To login, you must enter your email and password. Finally click on
            the Login button. You will be redirected to the initial page.
          </Typography>
          <Typography variant="h5" component="h5" mt={1}>
            Categories and Phrases
          </Typography>
          <Typography variant="body1" component="p" mt={1} align="justify">
            The phrases are organized in categories. You can have as many as you
            want. We have created some ones for you, but you are free to modify
            them or create new ones. Its up to you!
          </Typography>
          <Typography variant="h6" component="h6" mt={1}>
            Create, edit or delete a category or phrase
          </Typography>
          <Typography variant="body1" component="p" mt={1} align="justify">
            To open the Edit page, click on the pencil icon in the Command
            Block. You will find 3 sections: Select a category, Category and
            Phrases:
            <br />
            <ul>
              <li>
                <b>Select a category:</b> Press the the drop down box to select
                the category that you want to edit. Also you can fin the{' '}
                <em>+ Add Category</em> button to create a new category.
              </li>
              <li>
                <b>Category:</b> Show the name of the selected category and two
                buttons, one for Edit it and another for delete it.
              </li>
              <li>
                <b>Phrases:</b> On the corner right of the section, you will
                find the <em>+ Add Phrase</em> button. <br />
                Below is a list of the contained phrases with an edit and delete
                icon for each.
              </li>
            </ul>
            Before you leave the Edit page, you must save your changes. To do
            this, click on the Save button. If your changes are not saved, you
            will be notified with a message on the corner left down of the
            screen. <br />
            To discard the changes, click on the return icon. A modal will be
            prompted notifying that you will lose your changes.
          </Typography>
          <Typography variant="h6" component="h6" mt={1}>
            Add a phrase to the board
          </Typography>
          <Typography variant="body1" component="p" mt={1} align="justify">
            You can add as many phrases as you want. <br />
            To remove a phrase from the board, click on the trash icon.
          </Typography>
        </div>
      </Paper>
    </FullScreenDialog>
  );
}
