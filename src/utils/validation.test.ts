import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateContactForm,
  validatePortalCredentials,
  filterFacilitiesByCategory,
  verifySchoolDataCompliance,
  calculateDesktopScaleLayout,
  DESKTOP_CANVAS_WIDTH,
} from './validation';
import { SCHOOL_DATA } from '../config/schoolData';

test('validateContactForm rejects empty fields with clear error messages', () => {
  const result = validateContactForm({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  assert.equal(result.isValid, false);
  assert.ok(result.errors.name);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm rejects invalid email and short message', () => {
  const result = validateContactForm({
    name: 'Ahmad Khan',
    phone: '03001234567',
    email: 'invalid-email',
    message: 'Too short',
  });
  assert.equal(result.isValid, false);
  assert.equal(result.errors.name, undefined);
  assert.equal(result.errors.phone, undefined);
  assert.ok(result.errors.email);
  assert.ok(result.errors.message);
});

test('validateContactForm accepts valid contact submission', () => {
  const result = validateContactForm({
    name: 'Ahmad Khan',
    phone: '+92 300 1234567',
    email: 'ahmad@example.com',
    message: 'I would like to receive updates when admission dates are announced.',
  });
  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('validatePortalCredentials validates identifier and accessCode', () => {
  const invalid = validatePortalCredentials({ identifier: '', accessCode: '12' });
  assert.equal(invalid.isValid, false);
  assert.ok(invalid.errors.identifier);
  assert.ok(invalid.errors.accessCode);

  const valid = validatePortalCredentials({ identifier: 'UFPS-101', accessCode: 'pass1234' });
  assert.equal(valid.isValid, true);
});

test('filterFacilitiesByCategory returns all or filtered facilities', () => {
  const all = filterFacilitiesByCategory(SCHOOL_DATA.facilities.items, 'All');
  assert.equal(all.length, 6);

  const labs = filterFacilitiesByCategory(SCHOOL_DATA.facilities.items, 'Academic & Labs');
  assert.equal(labs.length, 4);

  const campus = filterFacilitiesByCategory(SCHOOL_DATA.facilities.items, 'Campus & Athletics');
  assert.equal(campus.length, 2);
});

test('verifySchoolDataCompliance confirms all Coming Soon placeholders and facts', () => {
  const compliance = verifySchoolDataCompliance(SCHOOL_DATA);
  assert.equal(compliance.compliant, true);
  assert.deepEqual(compliance.violations, []);
});

test('calculateDesktopScaleLayout scales proportionally on 360px, 375px, 390px, 430px and keeps 1:1 on desktop', () => {
  const m360 = calculateDesktopScaleLayout(360, 4000);
  assert.equal(m360.isScaled, true);
  assert.equal(m360.scale, 360 / DESKTOP_CANVAS_WIDTH);
  assert.equal(m360.scaledHeight, Math.ceil(4000 * (360 / DESKTOP_CANVAS_WIDTH)));

  const m375 = calculateDesktopScaleLayout(375, 4000);
  assert.equal(m375.isScaled, true);
  assert.equal(m375.scale, 375 / DESKTOP_CANVAS_WIDTH);

  const m390 = calculateDesktopScaleLayout(390, 4000);
  assert.equal(m390.isScaled, true);
  assert.equal(m390.scale, 390 / DESKTOP_CANVAS_WIDTH);

  const m430 = calculateDesktopScaleLayout(430, 4000);
  assert.equal(m430.isScaled, true);
  assert.equal(m430.scale, 430 / DESKTOP_CANVAS_WIDTH);

  const d1440 = calculateDesktopScaleLayout(1440, 4000);
  assert.equal(d1440.isScaled, false);
  assert.equal(d1440.scale, 1);
  assert.equal(d1440.scaledHeight, 4000);
});

