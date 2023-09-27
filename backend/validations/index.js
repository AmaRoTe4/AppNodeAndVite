import { CLAVE_GET, CLAVE_POST } from "../config/config.js";

export const validarClaveGet = (req, res) => {
  if (!req.header("clave")) {
    res.status(400).json({
      error: "required a clave for get",
    });
    return;
  }

  if (req.header("clave") !== CLAVE_GET) {
    res.status(400).json({
      error: "access denied",
    });
    return;
  }
};

export const validarClave = (req, res) => {
  if (!req.get("clave")) {
    res.status(400).json({
      error: "required a clave for post",
    });
    return;
  }

  if (req.get("clave") !== CLAVE_POST) {
    res.status(400).json({
      error: "access denied",
    });
    return;
  }
};
