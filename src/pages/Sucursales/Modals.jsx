import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'black',
  boxShadow: 0,
  p: 4,
  color:'white'
};
function Modals({ nombre, calle, localidad, gps }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="font-heebo">
      <button
        onClick={handleOpen}
        className="uppercase w-full rounded py-2 bg-buttonColor2 text-[0.9rem] font-bold mt-5 2xl:text-[1.14rem]"
      >
        ver mapa
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="w-11/12">
          <button
            onClick={handleClose}
            className="absolute top-2 right-4 text-[1.5rem]"
          >
            x
          </button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="uppercase"
          >
            Sucursal {nombre}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            <span>{calle}</span>
            <span>{localidad}</span>
          </Typography>
          <img className="w-full" src={gps} alt={nombre} />
        </Box>
      </Modal>
    </div>
  );
}

export default Modals;
