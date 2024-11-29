### README

# Multi-Step Form with Validation

This is a **React application** that implements a multi-step form using the **Shopify Polaris** library. The form includes validation, step navigation, state persistence, and an intuitive user experience. The form allows users to fill in personal, location, and payment information, and it persists the state across page refreshes.

---

## Features

1. **Multi-Step Navigation**:

   - Steps include Personal Information, Location Selection, and Payment Details.
   - Navigation buttons (`Next` and `Prev`) allow users to move through the steps.

2. **Form Validation**:

   - Validates fields like `First Name`, `Email`, `Phone Number`, etc.
   - Displays inline error messages when validation fails.

3. **Dynamic Data Fetching**:

   - Fetches countries and cities using external APIs.

4. **State Persistence**:

   - Form state is persisted across page refreshes using `localStorage`.

5. **Summary Page**:
   - Displays a summary of all inputs with inline editing capability.

---

## Technologies Used

- **React** for building the UI.
- **Shopify Polaris** for UI components.
- **Local Storage** for state persistence.
- **REST Countries API** and **GeoDB Cities API** for dynamic data fetching.

---

## Installation

### Prerequisites

Ensure you have the following installed:

- Node.js (v14+)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/iharshspatel/polaris-multistep-form
   ```
2. Navigate to the project directory:
   ```bash
   cd polaris-multistep-form
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Fill in each step of the form:
   - Step 1: Personal Information (e.g., First Name, Email, Phone Number).
   - Step 2: Select Country and City.
   - Step 3: Payment Information (e.g., Credit Card Number, Expiry Date, CVV).
3. Navigate through steps using the **Next** and **Prev** buttons.
4. View the summary page to review and edit your inputs.
5. Submit the form to complete the process.

---

## API Configuration

The application uses the following APIs:

1. **REST Countries API**: Fetches a list of countries.
2. **GeoDB Cities API**: Fetches cities based on the selected country.

You can replace these APIs with others by modifying the corresponding fetch functions in `Step2` component.

---

## Key Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
- **Build for Production**:
  ```bash
  npm run build
  ```

---

## Customization

### Adding Fields

To add more fields:

1. Update the corresponding step's component (`Step1.jsx`, `Step2.jsx`, etc.).
2. Extend the `formState` object in `App.js`.
3. Update the validation logic in `useValidation.js`.

### Enhancing Validation

Modify the `useFormValidation.js` hook to add more complex validation rules (e.g., regex for custom formats).

---

## Challenges Faced

- Designing an Intuitive Layout : One of the key challenges was creating a user-friendly layout for the multi-step form Ensuring that all the fields were presented in an intuitive and visually appealing way required careful thought especially given the diverse nature of inputs (personal information, country and city selection, and payment details).
- API Integration and Data Management : Integrating two APIs (countries and cities) presented challenges in terms of managing the structure and flow of data. Dynamically fetching and updating cities based on the selected country required meticulous handling of API responses, state management, and error handling. Additionally, ensuring seamless transitions between steps while maintaining the state across refreshes was more time-consuming than anticipated.
- Integrating dynamic APIs for fetching country and city data.
- Ensuring seamless state management across steps and persistence.
- Optimizing validation logic to work per step.

---

## Contact

For questions or suggestions, feel free to reach out:

- **Author**: [Harsh Patel](https://github.com/iharshspatel)
- **Email**: iharshspatel@gmail.com
