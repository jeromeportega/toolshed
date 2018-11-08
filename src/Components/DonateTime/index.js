import React, { Component } from 'react';
import Input from '../Input';

import { Container, StyledBtn } from './styles';

class DonateTime extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      company: '',
      business: '',
    }
  }

  handleChange(e) {
    if (e.currentTarget.name === 'name') this.setState({ name: e.currentTarget.value });
    else if (e.currentTarget.name === 'email') this.setState({ email: e.currentTarget.value });
    else if (e.currentTarget.name === 'company') this.setState({ company: e.currentTarget.value });
    else if (e.currentTarget.name === 'business') this.setState({ business: e.currentTarget.value });

    else console.log("There was an error in the NeedHelp component.");
  }

  render() {
    const { name, email, company, business } = this.state;
    return(
      <Container>
        <div className="columns-container">
          <div className="column">
            <span className="column-title">
              Share your expertise
              <br />
              with families in need.
            </span>
            <span className="column-body">
            Become a registered volunteer with Home Depot’s volunteer network by contributing  expert advice in the area of your specialty. In return, receive benefits from Home Depot’s XPro membership and more.
            </span>
          </div>

          <div className="form-column">
                <span className="header-text">
                Make a difference in your community.
                </span>
                <div className="form-container">
                    <Input name="name" value={name} placeholder="Your Name" onChange={(e) => this.handleChange(e)} />
                    <Input name="email" value={email} placeholder="E-Mail Address" onChange={(e) => this.handleChange(e)} />
                    <Input
                        name="company"
                        value={company}
                        placeholder="Company"
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Input name="business" value={business} placeholder="Business Type or Trade" onChange={(e) => this.handleChange(e)} />

                </div>
                <StyledBtn to="/donate-thanks">let's talk</StyledBtn>
            </div>
        </div>

      </Container>
    )
  }
}

export default DonateTime;
