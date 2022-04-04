import React from 'react';

const Blogs = () => {
    return (
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is the Context API? What is the purpose of Context API?
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Answer:</strong> Context API is used in the react framework which enables the developers not to drilling props. It helps user to exchange data or information between several components. Users can pass the props elements from top to bottom whithout sending key or any information component by component. It is used for sending information to other components without any dependency. It helps user from props drilling. Here is a provider, which one provides the expected components if the component import the context api and useContext(value).  
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        What is Semantic tag?
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Answer:</strong> Semantics tags are meaningful tags. When we see the sematic tags, it definitely tells you the idea about what would be the purpose of this tags. For example, div tag is not a semantic tag because we can't exactly understand what would be the purpose. On the other hand, form, table, article are semantic tags because we can easily understand that table would be a table, form where we need to provide several information.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Define Inline, block and inline-block elements.
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>Answer:</strong> Inline-block is the combination of inline and block. Inline elements doesn't allow us to use custome height and weight, where block elements allows. Block elements starts with a new line and take full width where inline elements doesn't allow to start from a new line. So inline-block will not start from a new line and also we can set our custom height and width. 
      </div>
    </div>
  </div>
</div>
    );
};

export default Blogs;