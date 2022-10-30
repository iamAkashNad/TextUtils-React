import React from 'react'

export default function About(props) {
  const theme = {
    color: "black",
    backgroundColor: "white",
  };

  if(props.theme === "dark" && !props.colTheme) {
    theme.backgroundColor = "rgb(40, 40, 40)";
    theme.color = "white";
  } else if(props.colTheme === "danger") {
    theme.backgroundColor = "rgb(121, 3, 3)";
    theme.color = "white";
  } else if(props.colTheme === "success") {
    theme.backgroundColor = "rgb(0, 124, 0)";
    theme.color = "white";
  } else if(props.colTheme === "primary") {
    theme.backgroundColor = "rgb(1, 1, 140)";
    theme.color = "white";
  } else if(props.colTheme === "warning") {
    theme.backgroundColor = "rgb(182, 120, 3)";
    theme.color = "white";
  }
  

  return (
    <div className='container'>
        <div className="accordion container" id="accordionExample">
            <h2 className='py-2'>About Us</h2>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button style={ theme } className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Purpose
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div style={ theme } className="accordion-body">
                    <strong>This is my first project where I'm using React.</strong> React is a great framework or library you can say. I learn about different concepts of react by this project.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button style={ theme } className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Text Utils
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div style={ theme } className="accordion-body">
                    <strong>TextUtils is an text utility base website.</strong> This website is made for daily usage of text formatting. By this website you can format or you can say manupulate the text as you want.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button style={ theme } className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    About Me
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div style={ theme } className="accordion-body">
                    <strong>Hello I'm Akash Nad.</strong> I'm a 4th year B.tech(CSE) student at this moment when I'm build this project. I am 20 years old(of course at this moment).
                </div>
                </div>
            </div>
        </div>
    </div>
  );
};
