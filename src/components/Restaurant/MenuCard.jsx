import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Button } from "@mui/material";

const MenuCard = () => {
  const demo = [
    { category: "Nuts & seeds", ingredients: ["Cashews"] },
    { category: "Protein", ingredients: ["Bacon strips", "Ground beef"] },
  ];

  const handleCheckBoxChange = (item) => {
    console.log(item);
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
                src="https://images.pexels.com/photos/1624473/pexels-photo-1624473.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />

              <div className="space-y-1 lg:space-y-5 lg:max-w-2xl">
                <p className="font-semibold text-xl">Burger</p>

                <p>$499</p>

                <p className="text-gray-400">Nice food</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className="flex gap-5 flex-wrap">
              {demo.map((item, index) => (
                <div key={index + 1}>
                  <p>{item.category}</p>

                  <FormGroup>
                    {item.ingredients.map((ingredient, index) => (
                      <FormControlLabel
                        onChange={() => handleCheckBoxChange(ingredient)}
                        key={index + 1}
                        control={<Checkbox />}
                        label={ingredient}
                      />
                    ))}
                  </FormGroup>
                </div>
              ))}
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
