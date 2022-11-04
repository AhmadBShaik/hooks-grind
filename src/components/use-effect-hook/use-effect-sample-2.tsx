import React from "react";

export const UseEffectSample2 = () => {
  // hooks
  const [name, setName] = React.useState<string>();
  const [age, setAge] = React.useState<number | undefined>();
  const [nameError, setNameError] = React.useState<string>("");
  const [ageError, setAgeError] = React.useState<string>("");

  React.useEffect(() => {
    if (name && name?.length < 3) {
      setNameError("atleast 3 characters are required!");
    } else {
      console.log(name);
      setNameError("");
    }
  }, [name]);

  React.useEffect(() => {
    if (age && age < 12) {
      setAgeError("You should have atleast 12 years!");
    } else {
      console.log(age);
      setAgeError("");
    }
  }, [age]);

  return (
    <div>
      <h1>Simple Validation</h1>
      <div>{nameError}</div>
      <input
        type={"text"}
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
        style={{ marginTop: 5 }}
      />
      <div>{ageError}</div>
      <input
        type={"number"}
        onChange={(e) => {
          setAge(parseInt(e.target.value.trim()));
        }}
        value={age}
        style={{ marginTop: 5 }}
      />
      <div>
        <button
          disabled={
            !(
              name !== "" &&
              age !== undefined &&
              age > 11 &&
              nameError === "" &&
              ageError === ""
            )
          }
          style={{ marginTop: 5 }}
        >
          Register
        </button>
      </div>
    </div>
  );
};
