import { App, Plugin, PluginManifest, PluginSettingTab, Setting, ToggleComponent } from "obsidian";

interface LeanPluginSettings {}

const DEFAULT_SETTINGS: LeanPluginSettings = {};

export default class LeanPlugin extends Plugin {
  settings: LeanPluginSettings;

  constructor(app: App, manifest: PluginManifest) {
    super(app, manifest);
    this.settings = DEFAULT_SETTINGS;
  }

  // Functionality that runs when the plugin is loaded, rather than when it is instantiated.
  override async onload() {
    // Load settings and persisted data.
    await this.loadSettings();

    // This adds a settings tab so the user can configure various aspects of the plugin.
    this.addSettingTab(new LeanSettingsTab(this.app, this));
  }

  // Things that are done
  override async onunload() {}

  // Loads the plugin's settings from disk.
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  // Saves the plugin's settings to disk.
  async saveSettings() {
    await this.saveData(this.settings);
  }
}

// The settings tab for the plugin.
class LeanSettingsTab extends PluginSettingTab {
  plugin: LeanPlugin;

  constructor(app: App, plugin: LeanPlugin) {
    super(app, plugin);
    this.plugin = plugin;
  }

  display(): void {
    const { containerEl } = this;
    containerEl.empty();
  }

  /** Creates a toggle setting.
   *
   * @param settingsProperty The name of the property in `InobsidianSettings`
   * that this setting is associated with.
   * @param name The name of the setting to be shown to the user.
   * @param description A description of the setting that will be shown to the
   * user.
   */
  _createToggle<Key extends string & BooleanPropsOf<LeanPluginSettings>>(
    settingsProperty: Key,
    name: string | DocumentFragment,
    description: string | DocumentFragment,
  ): void {
    new Setting(this.containerEl)
      .setName(name)
      .setDesc(description)
      .addToggle((component: ToggleComponent) => {
        return component
          .setValue(this.plugin.settings[settingsProperty])
          .onChange((newValue: LeanPluginSettings[Key]) => {
            this.plugin.settings[settingsProperty] = newValue;
            this.plugin.saveSettings();
          });
      });
  }
}

// Type-Level Functions =======================================================

/** Produces the set of keys of type `boolean` in the provided `Type`.
 *
 * @param Type the type to get the keys from
 */
type BooleanPropsOf<Type> = keyof {
  // We filter things from a mapped type by producing `never`.
  [K in keyof Type as Type[K] extends boolean ? K : never]: K;
};
