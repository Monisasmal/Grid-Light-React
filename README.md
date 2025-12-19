# Grid Light App
An interactive React grid app where clicking on grid cells toggles lights on and off, demonstrating state management and UI interaction logic.


## **Tech Stack Used**
- React (v19)
- Vite
- JavaScript (ES6+)
- React Hooks
- Custom CSS

---

## **Key Features**
- Grid layout rendered dynamically using React  
- Click interaction on each grid cell  
- Toggle light on/off behavior  
- Visual state change based on user interaction  
- Clean and minimal UI  
- Responsive grid layout  
- No external UI or animation libraries used

---

## **Why These Technologies**
- **React:** Efficient UI updates and component-based structure  
- **Vite:** Fast development and build performance  
- **React Hooks:** Simple and clear state management  
- **Custom CSS:** Full control over grid layout and light effects  

--- 

## **Challenges & Solutions**
- **Managing multiple grid states:**  
  Used arrays / matrix state to track active lights  
- **Updating UI efficiently:**  
  Updated state immutably to trigger minimal re-renders  
- **Visual clarity:**  
  Used CSS classes to clearly differentiate active vs inactive lights

---

## **How Grid Interaction Works**
- Each grid cell is rendered from an array or matrix  
- Clicking a cell triggers an `onClick` event  
- The clicked cell’s state is toggled (on ↔ off)  
- React re-renders only the affected cell  
- CSS handles the visual light effect based on state 
