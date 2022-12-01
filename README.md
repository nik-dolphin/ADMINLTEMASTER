# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


<div
                          className="box box-primary direct-chat direct-chat-primary shadow-sm border-none bg-light"
                          style={{
                            width: "100%",
                            backgroundColor: "hsla(0,0%,50.2%,.11)",
                          }}
                          id="firstMaxCard"
                        >
                          <div className="box-header shadow-sm">
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded me-2"
                              data-bs-toggle="dropdown"
                            >
                              <FaMagic />
                              <i className="fa fa-angle-down ms-2"></i>
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="p"
                                role="listitem"
                                aria-label="p"
                                style={{ paddingTop: "1rem" }}
                              >
                                <p>Normal</p>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="blockquote"
                                role="listitem"
                                aria-label="blockquote"
                              >
                                <blockquote
                                  className="blockquote"
                                  style={{ borderLeft: "0.7rem solid #007bff" }}
                                >
                                  Blockquote
                                </blockquote>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="pre"
                                role="listitem"
                                aria-label="pre"
                                style={{ padddingTop: "1rem" }}
                              >
                                <pre>Code</pre>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="h1"
                                role="listitem"
                                aria-label="h1"
                              >
                                <h1>Header 1</h1>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="h2"
                                role="listitem"
                                aria-label="h2"
                              >
                                <h2>Header 2</h2>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="h3"
                                role="listitem"
                                aria-label="h3"
                              >
                                <h3>Header 3</h3>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="h4"
                                role="listitem"
                                aria-label="h4"
                              >
                                <h4>Header 4</h4>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="h5"
                                role="listitem"
                                aria-label="h5"
                              >
                                <h5>Header 5</h5>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="h6"
                                role="listitem"
                                aria-label="h6"
                              >
                                <h6>Header 6</h6>
                              </a>
                            </ul>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                            >
                              <FaBold />
                            </button>

                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                            >
                              <FaUnderline />
                            </button>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded me-2"
                            >
                              <FaEraser />
                            </button>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded me-2"
                              data-bs-toggle="dropdown"
                            >
                              Source Sans Pro
                              <i className="fa fa-angle-down ms-2"></i>
                            </button>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="p"
                                role="listitem"
                                aria-label="p"
                                style={{ paddingTop: "1rem" }}
                              >
                                <p>Arial</p>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="p"
                                role="listitem"
                                aria-label="p"
                                style={{ paddingTop: "1rem" }}
                              >
                                <p>Courier New</p>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="p"
                                role="listitem"
                                aria-label="p"
                                style={{ paddingTop: "1rem" }}
                              >
                                <p>Helvetica</p>
                              </a>
                              <a
                                className="dropdown-item"
                                href="/"
                                data-value="p"
                                role="listitem"
                                aria-label="p"
                                style={{ paddingTop: "1rem" }}
                              >
                                <p> Source Sans Pro</p>
                              </a>
                            </ul>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded me-2"
                            >
                              <FaFont />
                            </button>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                            >
                              <i className="fas fa-list"></i>
                            </button>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                            >
                              <i className="fa fa-list-ol"></i>
                            </button>

                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded me-2"
                              data-bs-toggle="dropdown"
                            >
                              <i className="fa fa-align-left"></i>
                              <i className="fa fa-angle-down ms-2"></i>
                            </button>
                            <ul
                              className="dropdown-menu p-2"
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <button
                                type="submit"
                                className="btn btn-light btn-flat border rounded"
                              >
                                <FaAlignLeft />
                              </button>
                              <button
                                type="submit"
                                className="btn btn-light btn-flat border rounded"
                              >
                                <FaAlignCenter />
                              </button>
                              <button
                                type="submit"
                                className="btn btn-light btn-flat border rounded"
                              >
                                <FaAlignRight />
                              </button>
                              <button
                                type="submit"
                                className="btn btn-light btn-flat border rounded me-2"
                              >
                                <FaAlignJustify />
                              </button>
                              <button
                                type="submit"
                                className="btn btn-light btn-flat border rounded"
                              >
                                <FaOutdent />
                              </button>
                              <button
                                type="submit"
                                className="btn btn-light btn-flat border rounded"
                              >
                                <FaIndent />
                              </button>
                            </ul>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded me-2"
                            >
                              <i className="fa fa-table"></i>
                              <i className="fa fa-angle-down ms-2"></i>
                            </button>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                              onClick={() => setModalShow(true)}
                            >
                              <FaLink />
                            </button>
                            <MyVerticallyCenteredModal
                              show={modalShow}
                              onHide={() => setModalShow(false)}
                            />
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                              onClick={() => setImageModalShow(true)}
                            >
                              <FaImage />
                            </button>
                            <ImageLinkModel
                              show={imageModalShow}
                              onHide={() => setImageModalShow(false)}
                            />
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded me-2"
                              onClick={() => setVideoModalShow(true)}
                            >
                              <FaVideo />
                            </button>
                            <VideoLinkModel
                              show={videoModalShow}
                              onHide={() => setVideoModalShow(false)}
                            />
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                              onClick={handleMaximize}
                            >
                              {maximize ? (
                                <FaCompressArrowsAlt />
                              ) : (
                                <FaExpandArrowsAlt />
                              )}
                            </button>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                            >
                              <FaCode />
                            </button>
                            <button
                              type="submit"
                              className="btn btn-light btn-flat border rounded"
                              onClick={() => setHelpModalShow(true)}
                            >
                              <FaQuestion />
                            </button>
                            <HelpModel
                              show={helpModalShow}
                              onHide={() => setHelpModalShow(false)}
                            />
                          </div>
                          <div className="box-body shadow-sm">
                            <textarea
                              className="mb-2 overflow-scroll"
                              style={{ height: "30em" }}
                            ></textarea>
                          </div>
                        </div>