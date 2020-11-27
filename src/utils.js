// Module Start
// Text validation pattern
const patternText = /^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
// E-Mail validation pattern
const patternEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
/**
 * - Minimum eight characters
 * - at least one uppercase letter
 * - one lowercase letter
 * - one number and one special character
 */
const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[.-_@$!%*?&])[A-Za-z\d.-_@$!%*?&]{8,}$/;
/**
 * @description Response status checking
 * @author Luca Cattide
 * @date 2020-10-21
 * @param {object} response Request response
 * @returns
 */
function checkStatus(response) {
  if (response.status !== 200) {
    const error = new Error(response.statusText);

    return Promise.reject(error);
  }

  return Promise.resolve(response);
}

// Module export
export { patternText, patternEmail, patternPassword, checkStatus };
// Module End
