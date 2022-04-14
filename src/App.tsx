import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page, NavBar, Footer } from "@components";
import { config } from "@config";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  return (
    <BrowserRouter>
      <Page>
        <NavBar />
        <AnimatePresence>
          <Routes>
            {config.routes.map((r, i) => (
              <Route
                key={i}
                path={r.path}
                element={
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <r.element />
                  </motion.div>
                }
              />
            ))}
          </Routes>
        </AnimatePresence>
        <Footer />
      </Page>
    </BrowserRouter>
  );
}

export default App;
