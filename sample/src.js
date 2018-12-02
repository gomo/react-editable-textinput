import Box from '../src/EditableBox'
import Line from '../src/EditableLine'
import React from 'react'
import { render } from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  render() {
    return (
        <div>
          <div className="card mb-5">
            <div className="card-body">
              <Line
                label='<i class="fa fa-user"></i>'
                onSave={(value, editable) => this.onSaveName(value, editable)}
                value={this.state.value}
                editLabel='<i class="fas fa-pencil-alt"></i>'
                cancelLabel='<i class="fa fa-times"></i>'
                saveLabel='<i class="far fa-save"></i>'
                needsSaveOnKeyPress={(e) => true}
                // onClickEdit={() => this.onClickEdit()}
              />
            </div>
          </div>
          <div className="card mb-5">
            <div className="card-body">
              <Box
                label='<i class="fa fa-user"></i>'
                onSave={(value, editable) => this.onSaveName(value, editable)}
                value={this.state.value}
                editLabel='<i class="fas fa-pencil-alt"></i>'
                cancelLabel='<i class="fa fa-times"></i>'
                saveLabel='<i class="far fa-save"></i>'
                needsSaveOnKeyPress={(e) => true}
                // onClickEdit={() => this.onClickEdit()}
              />
            </div>
          </div>
        </div>
    )
  }
}

window.onload = () => {
  render(
    <App />,
    document.getElementById('main')
  );
}
