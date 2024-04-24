export function formatHoursAndMinutes(totalMinutes) {
  if (isNaN(totalMinutes)) {
    return "Invalid input";
  }

  // Calculate hours and minutes
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Construct the formatted string
  let formattedString = "";
  if (hours > 0) {
    formattedString += hours + " hour";
    if (hours > 1) {
      formattedString += "s"; // Pluralize if more than one hour
    }
    formattedString += " ";
  }
  if (minutes > 0) {
    formattedString += minutes + " minute";
    if (minutes > 1) {
      formattedString += "s"; // Pluralize if more than one minute
    }
  }

  return formattedString;
}

export function getYear(date) {
  return new Date(date).getFullYear();
}

export function formatMoney(value) {
  const abbreviations = ["", "k", "M", "B", "T"];
  const index = Math.floor(Math.log10(value) / 3);
  const scaledValue = value / Math.pow(1000, index);
  const suffix = abbreviations[index];

  // Use fixed number of decimal places based on the value's scale
  let formattedValue = scaledValue.toFixed(index > 0 ? 1 : 0);

  return formattedValue + suffix;
}

export function roundToOneDecimalPlace(number) {
  return number && isNaN(number) && number.toFixed(1); // Round to one decimal place
}
