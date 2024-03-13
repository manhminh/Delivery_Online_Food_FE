import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";
import { categorizeIngredients } from "../../utils/logic";
import { useDispatch } from "react-redux";
import { addItemToCart, findCart } from "../../redux/cart/cartAction";

const MenuCard = ({ item }) => {
  const [selectedIngredients, setSelectedIngredients] = React.useState([]);

  const dispatch = useDispatch();

  const handleAddItemToCart = (e) => {
    e.preventDefault();

    const reqData = {
      cartItem: {
        foodId: item.id,
        quantity: 1,
        ingredients: selectedIngredients,
      },
    };

    console.log("reqData: ", reqData);

    dispatch(addItemToCart(reqData));
  };

  useEffect(() => {}, []);

  const handleCheckBoxChange = (itemName) => {
    if (selectedIngredients.includes(itemName)) {
      setSelectedIngredients(
        selectedIngredients.filter((item) => item !== itemName)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, itemName]);
    }
  };

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="lg:flex justify-between items-center">
            <div className="lg:flex items-center lg:gap-5">
              <img
                className="w-[7rem] h-[7rem] object-cover"
                src={item.images[0]}
                alt=""
              />

              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">{item.name}</p>

                <p>${item.price}</p>

                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form onSubmit={handleAddItemToCart}>
            <div className="flex gap-5 flex-wrap">
              {Object.keys(categorizeIngredients(item.ingredients)).map(
                (category, index) => (
                  <div key={index + 1}>
                    <p>{category}</p>

                    <FormGroup>
                      {categorizeIngredients(item.ingredients)[category].map(
                        (item, index) => (
                          <FormControlLabel
                            onChange={() => handleCheckBoxChange(item.name)}
                            key={index + 1}
                            control={<Checkbox />}
                            label={item.name}
                          />
                        )
                      )}
                    </FormGroup>
                  </div>
                )
              )}
            </div>

            <div>
              <Button variant="contained" type="submit">
                {true ? "Add To Cart" : "Out Of Stock"}
              </Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MenuCard;
