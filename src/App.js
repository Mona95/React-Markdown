import React, { Component } from 'react';
import './App.css';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


const marked = require("marked");

const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

class App extends Component {
    state = {
      markdown : placeholder,
    }
  
  updateMarkdown = function(markdown){
    this.setState({
      markdown
    });
  }
  render() {
    let {markdown} = this.state;
    console.log(markdown);
    return (
      <div className="App container"> 

      <Grid>
        <Row className="show-grid">
        <Col md={6} mdPush={6}>
          <div>
            <i class="far fa-eye"></i><ControlLabel className="title-label">Preview</ControlLabel>
        <div className="preview" dangerouslySetInnerHTML= {{__html:marked(markdown)}}></div>
      </div> 
        </Col>

        <Col md={6} mdPull={6}>
            <div>
          <FormGroup controlId="formControlsTextarea">
            <i class="far fa-edit"></i><ControlLabel className="title-label">Editor</ControlLabel>
            <FormControl componentClass="textarea" style={{border:'8px solid #9966ff',  borderRadius:20
            }} rows={19} value={markdown}
            onChange={(event)=> this.updateMarkdown(event.target.value)}></FormControl>
          </FormGroup>
      </div>
        </Col>
      </Row>
      </Grid>
      <div className="design">
      <span>Design by : Mona </span>
      </div>

      </div>
    );
  }
}

export default App;
