import { useState } from "react";

export const NavItem = (props) => {
  const [appState, changeState] = useState({
    activeObject: null,
    objects: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 } ],
  });

}

// export default NavItem;