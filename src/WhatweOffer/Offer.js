import React from 'react';
import './offer.css';

export default function Offer() {
    return (
        <div className="container-fluid mt-3 mb-5 whatoffer" >
            <div className="offer_Section text-center">
                <h1>WHAT WE OFFER</h1>

                <div className="Offer_List d-flex mt-5">
                    <div className="offer">
                        <div className="icon">
                            <i class="fa fa-building-o" aria-hidden="true"></i>
                        </div>
                        <div className="head">
                            Explore AI Opportunities for Your Enterprise
                        </div>
                        <div className="description">
                            Unlock the potential of generative AI by identifying tailored opportunities for integration within
                            your organization, ensuring a strategic and efficient approach to AI implementation.
                        </div>
                    </div>

                    <div className="offer">
                        <div className="icon">
                        <i class="fa fa-handshake-o" aria-hidden="true"></i>
                        </div>
                        <div className="head">
                        Design AI Trust Layer
                        </div>
                        <div className="description">
                        Prioritize data security and build trust in generative AI applications with a dedicated trust
layer, emphasizing privacy-focused solutions that safeguard both organizational and
customer data.

                        </div>
                    </div>

                    <div className="offer">
                        <div className="icon">
                        <i class="fa fa-cogs" aria-hidden="true"></i>
                        </div>
                        <div className="head">
                        Scalability-Focused Solutions

                        </div>
                        <div className="description">
                        Streamline and optimize business processes with comprehensive workflow automation,
ensuring seamless integration of AI technologies from inception to execution for increased
efficiency and productivity.
                        </div>
                    </div>

                    <div className="offer">
                        <div className="icon">
                        <i class="fa fa-level-up" aria-hidden="true"></i>
                        </div>
                        <div className="head">
                        End to end Workflow automation

                        </div>
                        <div className="description">
                        Implement cutting-edge, scalable generative AI solutions that not only meet current
organizational needs but also adapt and grow with the evolving demands of your enterprise,
providing a future-proof approach to AI integration.

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
