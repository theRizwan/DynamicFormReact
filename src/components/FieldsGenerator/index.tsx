import React from 'react';
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  Button,
} from '@mui/material';
import Dropdown from '../Dropdown';

interface IProps {
    FormData: Field[];
    handleChange: (e: any) => void;
    handleSubmit: any;
}

interface Field {
    fieldName: string;
    type: string;
    value: number | string;
    options? : string[];
}

const FieldsGenerator: React.FC<IProps> = ({ FormData, handleChange, handleSubmit }) => (
  <div className="App">
    <Typography gutterBottom variant="h3" align="center">Dynamic Form</Typography>
    <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px' }}>
      <CardContent>
        <Grid container spacing={1}>
          {FormData && FormData.map((input: Field) => {
            if (input.type === 'select') {
              return (
                <Grid xs={12} item>
                  <Dropdown
                    name={input.fieldName}
                    label={input.fieldName}
                    options={input.options || []}
                    handleChange={handleChange}
                    value={input.value}
                  />
                </Grid>
              );
            }
            if (input.type === 'multiline') {
              return (
                <Grid xs={12} item>
                  <TextField
                    key={input.fieldName}
                    name={input.fieldName}
                    label={input.fieldName}
                    variant="outlined"
                    type={input.type}
                    multiline
                    fullWidth
                    rows={4}
                    defaultValue={input.value}
                    InputLabelProps={{ shrink: !!input.value }}
                    onChange={handleChange}
                  />
                </Grid>
              );
            }

            return (
              <Grid xs={12} item>
                <TextField
                  key={input.fieldName}
                  name={input.fieldName}
                  variant="outlined"
                  label={input.fieldName}
                  type={input.type}
                  fullWidth
                  defaultValue={input.value}
                  InputLabelProps={{ shrink: !!input.value }}
                  onChange={handleChange}
                />
              </Grid>
            );
          })}
          <Grid xs={12} sm={12} item>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  </div>
);
export default FieldsGenerator;
