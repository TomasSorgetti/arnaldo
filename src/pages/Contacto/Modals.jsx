import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import logo from "../../assets/images/logo/logoPositivo.png";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  boxShadow: 0,
  p: 4,
  color: "black",
};
function Modals({ open, setOpen }) {
  const handleClose = () => setOpen(false);
  return (
    <div className="font-heebo">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="w-11/12 flex flex-col gap-10 justify-center items-center 2xl:w-[682px] 2xl:h-[770px]"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-7 text-[1.5rem]"
          >
            <div className="relative">
              <div className="h-[2px] w-5 bg-black rotate-45 absolute"></div>
              <div className="h-[2px] w-5 bg-black rotate-[-45deg] absolute"></div>
            </div>
          </button>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            className="uppercase"
          >
            <h4 className="text-[0.8rem] font-extrabold">GRACIAS POR CONTACTARNOS</h4>
          </Typography>
          <Typography
            id="modal-modal-description"
            className="flex flex-col gap-2 text-center"
            sx={{ mt: 2 }}
          >
            <p className="text-[0.8rem] font-normal">Hemos recibido su mensaje de forma exitosa</p>
            <p className="text-[0.8rem] font-normal">Responderemos a la brevedad vía email o telefónicamente.</p>
          </Typography>
          <img className="w-[90px]" src={logo} alt="logo arnaldo" />
        </Box>
      </Modal>
    </div>
  );
}

export default Modals;
