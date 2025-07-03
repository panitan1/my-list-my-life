<template>
  <div class="card p-3">
    <Toolbar style="border-radius: 1rem; padding: 0.5rem 0.5rem 0.5rem 1rem">
      <template #start>
        <RouterLink to="/" >
          <Button label="Home" text plain />
        </RouterLink>
        
        <RouterLink to="/register">
        <OverlayBadge severity="danger">
        <Button label="Register" text plain />
        </OverlayBadge>
        </RouterLink>
        <Button label="About" text plain  />
      </template>
      <template #end>
        <RouterLink to="/login">
        <Button label="Login" text plain />
        </RouterLink>
        <div class="flex items-center gap-2">
          <Avatar icon="pi pi-user" class="mr-2" size="small" style="background-color: #ece9fc; color: #2a1261" />
        </div>
      </template>
    </Toolbar>
  </div>
  <Pink_nori/>
</template>

<script setup>

import 'primeicons/primeicons.css'
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Popover from 'primevue/popover';
import Avatar from 'primevue/avatar';
import Badge from 'primevue/badge';
import OverlayBadge from 'primevue/overlaybadge'
import Pink_nori from './Pink/Pink_nori.vue';
</script>
