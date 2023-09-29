import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../components/Navbar';
import { getCars, deleteItem } from '../redux/CarsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';

export default function BasicTable() {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="delete-table">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Car</TableCell>
                <TableCell align="left">Image</TableCell>
                <TableCell align="left">Description</TableCell>
                <TableCell align="left">Price&nbsp;($)</TableCell>
                <TableCell align="left">Model</TableCell>
                <TableCell align="left">Delete Item</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cars.map((car) => (
                <TableRow
                  key={car.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="car">
                    {car.name}
                  </TableCell>
                  <TableCell align="left" className="car-img-table">
                    <img src={car.image} alt="car-image" />
                  </TableCell>
                  <TableCell align="left">{car.description}</TableCell>
                  <TableCell align="left">{car.price}</TableCell>
                  <TableCell align="left">{car.model}</TableCell>
                  <TableCell align="left">
                    <Button
                      variant="contained"
                      // color="error"
                      sx={{ color: 'blue' }}
                      size="small"
                      startIcon={<DeleteIcon />}
                      onClick={() => handleDelete(car.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}