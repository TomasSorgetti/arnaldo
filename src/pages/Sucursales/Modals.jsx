import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import cancel from "../../assets/images/iconos/iconos_navbar/cancel.png"
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
        className="uppercase w-full rounded py-2 bg-hoverButton text-[0.9rem] font-bold mt-5 2xl:text-[1.14rem] hover:bg-[#494646] focus:bg-[#676565]"
      >
        ver mapa
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="overflow-hidden w-11/12 lg:w-10/12 xl:w-9/12"
        >
          <button
            onClick={handleClose}
            className="absolute top-3 right-4 lg:top-6 lg:right-6"
          >
            <img
              className="h-[1rem] xl:h-[2rem]"
              src={cancel}
              alt="cancel button"
            />
          </button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="uppercase"
          >
            Sucursal {nombre}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <span className="text-[0.625rem] font-light lg:text-[1.1rem] 2xl:text-[1.4rem]">
              {calle}
            </span>
            <span className="text-[0.625rem] font-light lg:text-[1.1rem] 2xl:text-[1.4rem]">
              {localidad}
            </span>
          </Typography>
          <iframe
            src={gps}
            className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] xl:h-[500px] 2xl:h-[560px] 3xl:h-[640px] 4xl:h-[700px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
}

export default Modals;
