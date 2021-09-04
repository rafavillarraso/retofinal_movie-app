import React from 'react'
import { ButtonBackToHome} from "../components/ButtonBackToHome";


export const NotFound = () =>
    (
        <div>
            <section className="section is-medium">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column has-text-centered">
                            <h1 className="title">404 Page Not Found</h1>
                            <p className="subtitle">An unexpected error has occurred. Please contact the site owner.</p>
                            <ButtonBackToHome/>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )