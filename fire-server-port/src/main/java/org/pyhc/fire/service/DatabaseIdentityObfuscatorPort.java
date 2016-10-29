package org.pyhc.fire.service;

import java.util.Collection;

public interface DatabaseIdentityObfuscatorPort {

    void hideId(Obfuscatable obfuscatable);

    void hideId(Collection<? extends Obfuscatable> obfuscatables);

}
