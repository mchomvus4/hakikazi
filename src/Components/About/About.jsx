import React from 'react';
import './About.css';
 function About() {
  return (
    <section id="about"> 
    <div className="container" >
              <div className="row">
                 <button className="btn btn-primary" data-toggle="collapse" data-target="#about-us">About Us</button>
                <div className="collapse" id ="about-us">
                 <div className="about-content">
                  <div className="col-md-12 text-justify">
                      
            The “About Us” page is often one of the most-visited pages on law firm websites.

Many law firm “About Us” pages are a simple list of facts about the firm, such as when it was founded, the attorneys’ years of experience, and locations served.

While all those facts may be true, they aren’t particularly engaging, and they don’t help potential clients develop a personal connection to the law firm.

Here are four tips for writing a more engaging “about us” page.

<h2>1. Explain why you do what you do on your law firm’s “About Us” page</h2>
Your “About Us” page should explain what you do, the types of clients you serve, and provide background information on the history and achievements of your law firm.

But you can also go beyond just these basic facts. Potential clients want to know that you will care about them and their case or matter.

Your “About Us” page is an opportunity to explain why your law firm does what it does. Why does your firm focus on a particular practice area (or areas)? Why is that work important to the attorneys and staff in your firm?

Giving potential clients insight into why you care about your work helps them see that you will also care about them and their case or matter. This can help potential clients develop a personal connection to your law firm and make it more likely they will contact you.

<h2>2. Set yourself apart from your law firm’s competitors</h2>
Your law firm’s “About Us” page is also an opportunity to differentiate yourself from your competitors.

As you are writing your “About Us” page, think about what makes your law firm unique.

For example, if you are a criminal defense law firm, perhaps you have former prosecutors or police officers on staff. If you’re a personal injury firm, perhaps you have a network of respected medical experts and skilled investigators that help you provide exceptional service to your clients.

Including this information makes it easier for potential clients to see why they should choose your law firm over a competitor.

<h2>3. Choose a point of view for your “About Us” page and stick to it</h2>
The point of view you choose can affect potential client’s perceptions of you and your law firm.

For example:

A first-person perspective can make your law firm seem approachable and engaged (“I provide aggressive criminal defense.”)
Second-person can put the focus on the client and their needs (“You need aggressive criminal defense.”)
Third-person can seem more objective and authoritative (“Law Firm X provides aggressive criminal defense.”)
Whether you choose to write in first-, second-, or third-person is a strategic decision that depends on your law firm’s branding, your potential clients, and the message you want to convey to them.

Use whichever point of view you have chosen consistently within a page. For example, don’t suddenly switch between first- and third-person in the middle of the page.

To learn more, see our blog, “Which Point Of View Should Attorneys Use On Law Firm Websites?” If you’re a solo practitioner, see “Should You Write For Your Website In 1st Person Or 3rd Person?“

<h2>4. Write with your potential clients in mind</h2>
Your potential clients likely don’t have a legal background, so your “About Us” page (as well as the rest of your website) should be written in client-friendly language.

As you are writing, ask yourself “Would I understand this if I didn’t have a legal background?”

For example, if you received an award or have a high ranking on a site like Avvo, you can briefly explain why that award or ranking matters. This additional context will help your non-attorney potential clients better understand why the award is important and how it may make your law firm a good fit for their needs.
                 
                 </div>
                 {/* <button type="button" className="btn btn-primary">Read More>></button> */}
                </div>
             {/* <div className="col-md-6 proffesionalism collapse">
                 <p>Corporate Law</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:"80%"}}>80%</div> 
                    </div>

                    <p>Criminal Law</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:"88%"}}>88%</div> 
                    </div>

                    <p>Labour Law</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:"96%"}}>96%</div> 
                    </div>
                    <p>Administrative  Law</p>
                    <div className="progress">
                        <div className="progress-bar" style={{width:"75%"}}>75%</div> 
                    </div>
                      </div> */}
                      </div> 
        </div>
    </div>

    </section>
  );
}
export default About;