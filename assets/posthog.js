!function(t,e){var o,n,p,r;e.__SV||(window.posthog&&window.posthog.__loaded)||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="ki Ci init qi Hi pr ji zi Di capture calculateEventProperties Qi register register_once register_for_session unregister unregister_for_session Ki getFeatureFlag getFeatureFlagPayload getFeatureFlagResult getAllFeatureFlags isFeatureEnabled reloadFeatureFlags updateFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey cancelPendingSurvey canRenderSurvey canRenderSurveyAsync Xi identify setPersonProperties unsetPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags reset setIdentity clearIdentity get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException addExceptionStep captureLog startExceptionAutocapture stopExceptionAutocapture loadToolbar get_property getSessionProperty Ji Gi createPersonProfile setInternalOrTestUser Yi Ai rn opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Vi debug mr it getPageViewId captureTraceFeedback captureTraceMetric Oi".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('phc_nXprFbMJQ3EV9Gq547vjz2CyZvJKhRZVZYuAHX2auNNS', {
  api_host: 'https://us.i.posthog.com',
  defaults: '2026-05-30',
  person_profiles: 'identified_only'
});

window.addEventListener('DOMContentLoaded', function () {
  function linkContext(link) {
    if (link.classList.contains('brand')) return 'brand';
    if (link.closest('footer')) return 'footer';
    if (link.closest('nav')) return 'navigation';
    if (link.closest('.hero')) return 'hero';
    if (link.closest('.final-cta')) return 'final_cta';
    if (link.closest('#how')) return 'how_it_works';
    if (link.closest('#privacy')) return 'privacy';
    return 'content';
  }

  function linkRole(link) {
    if (link.classList.contains('js-install')) return 'install';
    if (link.classList.contains('button')) return 'cta';
    if (link.classList.contains('brand')) return 'brand';
    if (link.closest('nav')) return 'navigation';
    if (link.closest('footer')) return 'footer';
    return 'link';
  }

  function destinationType(url) {
    if (url.protocol === 'mailto:') return 'email';
    if (url.origin !== window.location.origin) return 'outbound';
    if (url.pathname === window.location.pathname && url.hash) return 'anchor';
    return 'internal';
  }

  document.querySelectorAll('a[href]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (!window.posthog || typeof posthog.capture !== 'function') return;

      var href = link.getAttribute('href') || '';
      var url = new URL(href, window.location.href);
      var text = (link.getAttribute('aria-label') || link.textContent || '').replace(/\s+/g, ' ').trim();

      posthog.capture('site_link_click', {
        link_text: text || 'unlabeled',
        link_href: href,
        link_url: url.href,
        link_path: url.origin === window.location.origin ? url.pathname + url.hash : null,
        link_role: linkRole(link),
        link_context: linkContext(link),
        destination_type: destinationType(url),
        position: link.dataset.position || null,
        page_path: window.location.pathname
      });
    });
  });
});
