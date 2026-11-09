/* ==========================================================================
   Michelle Handley · site.js, loaded with defer on every page
   --------------------------------------------------------------------------
   Two enhancements. The site works without either:
   1. The Menu button on phones. Without JS, components.css leaves the nav
      links in view instead.
   2. Enquiry forms. Without JS, the browser checks the required fields and
      the form posts to Web3Forms, which redirects to thank-you.html. With
      JS, errors appear in words beside each field, and if sending fails a
      message says so instead of leaving the page.
   ========================================================================== */

// 1. Mobile menu --------------------------------------------------------------
const menuButton = document.querySelector('.site-header__menu');
const nav = menuButton && document.getElementById(menuButton.getAttribute('aria-controls'));

if (menuButton && nav) {
  const setOpen = (open) => menuButton.setAttribute('aria-expanded', String(open));
  const isOpen = () => menuButton.getAttribute('aria-expanded') === 'true';

  menuButton.addEventListener('click', () => setOpen(!isOpen()));

  // Close after choosing a link (in the nav or the header button below it),
  // since some jump within the same page
  menuButton.parentElement.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      menuButton.focus();
    }
  });
}

// 2. Enquiry forms ------------------------------------------------------------
// Each required field has a hidden <p id="[field id]-error"> after it, holding
// the wording in data-missing (and data-invalid, for a badly typed email).
document.querySelectorAll('form.form').forEach((form) => {
  const required = [...form.querySelectorAll('[required]')];
  const status = form.querySelector('.form__status');
  const submit = form.querySelector('[type="submit"]');

  form.noValidate = true;

  // Shows or clears one field's error, and returns whether the field is valid
  const check = (field) => {
    const error = document.getElementById(`${field.id}-error`);
    const valid = field.validity.valid;
    const describedBy = (field.getAttribute('aria-describedby') || '')
      .split(' ')
      .filter((id) => id && id !== error.id);

    if (valid) {
      field.removeAttribute('aria-invalid');
    } else {
      error.querySelector('.field__error-text').textContent =
        field.validity.valueMissing ? error.dataset.missing : error.dataset.invalid;
      field.setAttribute('aria-invalid', 'true');
      describedBy.push(error.id);
    }

    error.hidden = valid;
    if (describedBy.length) field.setAttribute('aria-describedby', describedBy.join(' '));
    else field.removeAttribute('aria-describedby');
    return valid;
  };

  // Once a field has an error, clear it as soon as it's put right
  required.forEach((field) => {
    const recheck = () => {
      if (field.hasAttribute('aria-invalid')) check(field);
    };
    field.addEventListener('input', recheck);
    field.addEventListener('change', recheck);
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const invalid = required.filter((field) => !check(field));
    if (invalid.length) {
      invalid[0].focus();
      return;
    }

    const label = submit.textContent;
    status.hidden = true;
    submit.disabled = true;
    submit.textContent = submit.dataset.sending;

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      // The page the no-JS redirect lands on, wherever this copy is served from.
      // Relative, and every page sits in one folder, so this works in a subfolder.
      window.location.assign('thank-you.html');
    } catch {
      submit.disabled = false;
      submit.textContent = label;
      status.hidden = false;
      status.focus();
    }
  });
});
