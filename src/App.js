import "./App.css";
import Nav from "./components/Nav";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import {
  Grid,
  GridItem,
  FormControl,
  // FormLabel,
  // Input,
} from "@chakra-ui/react";
import Header from "./components/Header";
import React, { useState } from "react";
import { Courses } from "./components/cNames";

function App() {
  const [search, setSearch] = useState("");

  // console.log(search);

  return (
    <>
      <Nav />
      <Header />
      <h1 className="our-co text-center"> Our courses </h1>

      <div className="bg-img">
        <FormControl>
          <div class="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="What are you looking for?"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </FormControl>
        <div className="cards">
          {Courses.filter(
            (course) =>
              course.name.toLowerCase().includes(search) ||
              course.name.includes(search)
          ).map((course) => (
            <Grid>
              <GridItem>
                <Cards
                  courseImg={course.img}
                  key={course.id}
                  courseName={course.name}
                  courseDescription={course.description}
                  instructorName={course.instructor}
                  courseDate={course.date}
                  avtImg={course.avt}
                />
              </GridItem>
            </Grid>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
