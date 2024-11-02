<template>
  <div class="form-column padding-y-5px">
    <div class="input-group-column">
      Update Logo:
      <div class="logo">
        <div class="logo-backdrop">
          <button class="update-logo-button">Click to update</button>
        </div>
      </div>
    </div>
    <div class="input-group-column">
      <label for="name">Business name:</label>
      <input type="text" placeholder="Coffee shop" class="text-input" id="name">
    </div>
    <div class="input-group-column">
      <label for="desc">Description: </label>
      <textarea placeholder="Write about your business" rows="5" class="text-input" id="desc"></textarea>
    </div>
    <div>
      <button class="button success">Save</button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  width: 210px;
  aspect-ratio: 3;
  height: auto;
  background-image: url("https://placehold.co/300x100");
  background-size: cover;
  background-position: center;
  position: relative;
}

.logo-backdrop {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: background-color 0.5s ease;
  transition: opacity 0.5s ease;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-backdrop:hover {
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 1;
}

.update-logo-button {
  cursor: pointer;
  border: none;
  background: transparent;
  color: white;
  font-weight: bold;
  width: 100%;
  height: 100%;
}
</style>