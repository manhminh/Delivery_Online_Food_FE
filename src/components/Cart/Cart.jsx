import { Button, Card, Divider, Grid, TextField } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import AddressCard from "./AddressCard";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/order/orderAction";

const Cart = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
  };

  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);

  const [openAddressModal, setOpenAddressModal] = React.useState(false);
  const handleSelectAddress = () => {};

  const handleOpenAddressModal = () => {
    setOpenAddressModal(true);
  };

  const handleCloseAddressModal = () => {
    setOpenAddressModal(false);
  };

  const initialValues = {
    streetAddress: "",
    state: "",
    pinCode: "",
    city: "",
  };

  const validationSchema = Yup.object().shape({
    streetAddress: Yup.string().required("Street address is required"),
    state: Yup.string().required("State is required"),
    pinCode: Yup.string().required("Pincode is required"),
    city: Yup.string().required("City is required"),
  });

  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    console.log(value);
    const reqData = {
      orderData: {
        restaurantId: cart.cartItems[0].food?.restaurant.id,
        deliveryAddress: {
          streetAddress: value.streetAddress,
          city: value.city,
          state: value.state,
          pinCode: value.pinCode,
          country: "America",
        },
      },
    };

    dispatch(createOrder(reqData));
  };

  console.log(cart);

  return (
    <div>
      <main className="lg:flex justify-between">
        <section className="lg:w-[30%] space-y-6 lg:min-h-screen pt-10">
          {cart.cartItems.map((item) => (
            <CartItem item={item} />
          ))}

          <Divider />

          <div className="billDetails px-5 text-sm">
            <p className="font-extralight py-5">Bill Details</p>

            <div className="space-y-3">
              <div className="flex justify-between text-gray-400">
                <p>Item Total</p>
                <p>
                  $
                  {cart.cartItems.reduce(
                    (total, item) => total + item.price,
                    0
                  )}
                </p>
              </div>

              <div className="flex justify-between text-gray-400">
                <p>Deliver Fee</p>
                <p>$20</p>
              </div>

              <div className="flex justify-between text-gray-400">
                <p>Plateform Fee</p>
                <p>$12</p>
              </div>

              <div className="flex justify-between text-gray-400">
                <p>GST and Restaurant Charges</p>
                <p>$33</p>
              </div>

              <Divider />
            </div>

            <div className="flex justify-between text-gray-400 pt-3">
              <p>Total Pay</p>

              <p>
                $
                {cart.cartItems.reduce((total, item) => total + item.price, 0) +
                  20 +
                  12 +
                  33}
              </p>
            </div>
          </div>
        </section>

        <Divider orientation="vertical" flexItem />

        <section className="lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0">
          <div>
            <div className="text-center font-semibold text-2xl py-10">
              Choose Delivery Address
            </div>

            <div className="flex gap-5 flex-wrap justify-center">
              {[1, 1, 1, 1, 1].map((item, index) => (
                <AddressCard
                  key={index + 1}
                  handleSelectAddress={handleSelectAddress}
                  item={item}
                  showButton={true}
                />
              ))}

              <Card className="flex w-64 gap-5 p-5">
                <AddLocationIcon />
                <div className="space-y-3 text-gray-500">
                  <h1 className="font-semibold text-lg text-white">
                    Add New Address
                  </h1>

                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={handleOpenAddressModal}
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Modal
        open={openAddressModal}
        onClose={handleCloseAddressModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      name="streetAddress"
                      label="Street Address"
                      variant="outlined"
                      fullWidth
                      as={TextField}
                      error={errors.streetAddress && touched.streetAddress}
                      helperText={
                        errors.streetAddress && touched.streetAddress ? (
                          <span className="text-red-500">
                            {errors.streetAddress}
                          </span>
                        ) : null
                      }
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Field
                      name="state"
                      label="State"
                      variant="outlined"
                      fullWidth
                      as={TextField}
                      error={errors.state && touched.state}
                      helperText={
                        errors.state && touched.state ? (
                          <span className="text-red-500">{errors.state}</span>
                        ) : null
                      }
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Field
                      name="pinCode"
                      label="Pincode"
                      variant="outlined"
                      fullWidth
                      as={TextField}
                      error={errors.pinCode && touched.pinCode}
                      helperText={
                        errors.pinCode && touched.pinCode ? (
                          <span className="text-red-500">{errors.pinCode}</span>
                        ) : null
                      }
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      name="city"
                      label="City"
                      variant="outlined"
                      fullWidth
                      as={TextField}
                      error={errors.city && touched.city}
                      helperText={
                        errors.city && touched.city ? (
                          <span className="text-red-500">{errors.city}</span>
                        ) : null
                      }
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <Button variant="contained" type="submit" fullWidth>
                      DELIVERY HERE
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Box>
      </Modal>
    </div>
  );
};

export default Cart;
