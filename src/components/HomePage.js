import Cards from "./Cards";
import { Grid, GridItem, FormControl } from "@chakra-ui/react";
import Header from "./Header";
import React, { useState } from "react";
import { Courses } from "./cNames";

function HomePage() {
  const [search, setSearch] = useState("");
  // console.log(search);

  return (
    <>
      <Header />
      <h1 className="our-co text-center"> Our courses </h1>
      <div className="bg-img">
        <FormControl>
          <div className="wrap">
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
                  key={course.id}
                  courseName={course.name}
                  courseImg={course.img}
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
    </>
  );
}

export default HomePage;
